import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { MathUtils } from '../modules/MathCalculator';

/**
 * Example component demonstrating the use of Nitro Math Calculator
 */
export const MathCalculatorExample: React.FC = () => {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [operation, setOperation] = useState<
    'add' | 'subtract' | 'multiply' | 'divide'
  >('add');

  const performCalculation = () => {
    const a = parseFloat(numberA);
    const b = parseFloat(numberB);

    if (isNaN(a) || isNaN(b)) {
      Alert.alert('Error', 'Please enter valid numbers');

      return;
    }

    try {
      let calculationResult: number;

      switch (operation) {
        case 'add':
          calculationResult = MathUtils.add(a, b);
          break;
        case 'subtract':
          calculationResult = MathUtils.subtract(a, b);
          break;
        case 'multiply':
          calculationResult = MathUtils.multiply(a, b);
          break;
        case 'divide':
          calculationResult = MathUtils.divide(a, b);
          break;
        default:
          return;
      }

      setResult(calculationResult);
    } catch (error) {
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Calculation failed',
      );
    }
  };

  const getOperationSymbol = () => {
    switch (operation) {
      case 'add':
        return '+';
      case 'subtract':
        return '-';
      case 'multiply':
        return '×';
      case 'divide':
        return '÷';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nitro Math Calculator</Text>
      <Text style={styles.subtitle}>Native Swift & Kotlin Implementation</Text>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          onChangeText={setNumberA}
          placeholder="Enter first number"
          style={styles.input}
          value={numberA}
        />

        <Text style={styles.operationSymbol}>{getOperationSymbol()}</Text>

        <TextInput
          keyboardType="numeric"
          onChangeText={setNumberB}
          placeholder="Enter second number"
          style={styles.input}
          value={numberB}
        />
      </View>

      <View style={styles.operationButtons}>
        {(['add', 'subtract', 'multiply', 'divide'] as const).map((op) => (
          <TouchableOpacity
            key={op}
            onPress={() => setOperation(op)}
            style={[
              styles.operationButton,
              operation === op && styles.selectedOperation,
            ]}>
            <Text
              style={[
                styles.operationButtonText,
                operation === op && styles.selectedOperationText,
              ]}>
              {op.charAt(0).toUpperCase() + op.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={performCalculation}
        style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.resultValue}>{result}</Text>
          <Text style={styles.resultEquation}>
            {numberA} {getOperationSymbol()} {numberB} = {result}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
    height: 50,
    paddingHorizontal: 15,
  },
  operationSymbol: {
    color: '#007AFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  operationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  operationButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    height: 45,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selectedOperation: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  operationButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  selectedOperationText: {
    color: 'white',
  },
  calculateButton: {
    alignItems: 'center',
    backgroundColor: '#34C759',
    borderRadius: 10,
    height: 55,
    justifyContent: 'center',
    marginBottom: 30,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultLabel: {
    color: '#666',
    fontSize: 16,
    marginBottom: 5,
  },
  resultValue: {
    color: '#007AFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultEquation: {
    color: '#333',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
