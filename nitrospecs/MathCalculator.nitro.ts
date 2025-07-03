import { HybridObject } from 'react-native-nitro-modules'

/**
 * A simple math calculator using Nitro Modules
 * Supports basic arithmetic operations: add, subtract, multiply, divide
 */
export interface MathCalculator extends HybridObject<{ ios: 'swift', android: 'kotlin' }> {
  /**
   * Add two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of a and b
   */
  add(a: number, b: number): number

  /**
   * Subtract two numbers
   * @param a First number
   * @param b Second number
   * @returns Difference of a and b (a - b)
   */
  subtract(a: number, b: number): number

  /**
   * Multiply two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of a and b
   */
  multiply(a: number, b: number): number

  /**
   * Divide two numbers
   * @param a First number (dividend)
   * @param b Second number (divisor)
   * @returns Quotient of a divided by b
   * @throws Error if b is zero
   */
  divide(a: number, b: number): number
}
