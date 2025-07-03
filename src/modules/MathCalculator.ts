import { NitroModules } from 'react-native-nitro-modules';

import type { MathCalculator } from '../../nitrospecs/MathCalculator.nitro';

/**
 * A simple math calculator using Nitro Modules
 * Provides basic arithmetic operations implemented natively in Swift (iOS) and Kotlin (Android)
 */
export const MathCalculatorModule =
  NitroModules.createHybridObject<MathCalculator>('MathCalculator');

/**
 * Helper functions for easier usage
 */
export const MathUtils = {
  /**
   * Add two numbers
   */
  add: (a: number, b: number): number => {
    return MathCalculatorModule.add(a, b);
  },

  /**
   * Subtract two numbers (a - b)
   */
  subtract: (a: number, b: number): number => {
    return MathCalculatorModule.subtract(a, b);
  },

  /**
   * Multiply two numbers
   */
  multiply: (a: number, b: number): number => {
    return MathCalculatorModule.multiply(a, b);
  },

  /**
   * Divide two numbers (a / b)
   * @throws Error if attempting to divide by zero
   */
  divide: (a: number, b: number): number => {
    return MathCalculatorModule.divide(a, b);
  },

  /**
   * Calculate percentage of a number
   */
  percentage: (value: number, percent: number): number => {
    return MathCalculatorModule.multiply(
      value,
      MathCalculatorModule.divide(percent, 100),
    );
  },

  /**
   * Calculate square of a number
   */
  square: (value: number): number => {
    return MathCalculatorModule.multiply(value, value);
  },

  /**
   * Calculate power of a number (basic implementation using repeated multiplication)
   */
  power: (base: number, exponent: number): number => {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    let result = base;
    for (let i = 1; i < Math.abs(exponent); i++) {
      result = MathCalculatorModule.multiply(result, base);
    }

    return exponent < 0 ? MathCalculatorModule.divide(1, result) : result;
  },
};

// Export the module and types
export { MathCalculatorModule as default };
