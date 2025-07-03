import Foundation
/**
 * Swift implementation of the MathCalculator Nitro module
 * Provides basic arithmetic operations: add, subtract, multiply, divide
 */
class HybridMathCalculator: HybridMathCalculatorSpec {
    
    /**
     * Add two numbers
     */
    public func add(a: Double, b: Double) throws -> Double {
        return a + b
    }
    
    /**
     * Subtract two numbers (a - b)
     */
    public func subtract(a: Double, b: Double) throws -> Double {
        return a - b
    }
    
    /**
     * Multiply two numbers
     */
    public func multiply(a: Double, b: Double) throws -> Double {
        return a * b
    }
    
    /**
     * Divide two numbers (a / b)
     * Throws an error if attempting to divide by zero
     */
    public func divide(a: Double, b: Double) throws -> Double {
        guard b != 0 else {
            throw NSError(
                domain: "MathCalculatorError", 
                code: 1001, 
                userInfo: [NSLocalizedDescriptionKey: "Division by zero is not allowed"]
            )
        }
        return a / b
    }
}
