package com.margelo.nitro.example

import com.facebook.proguard.annotations.DoNotStrip

/**
 * Kotlin implementation of the MathCalculator Nitro module
 * Provides basic arithmetic operations: add, subtract, multiply, divide
 */
@DoNotStrip
class HybridMathCalculator : HybridMathCalculatorSpec() {
    
    /**
     * Add two numbers
     */
    override fun add(a: Double, b: Double): Double {
        return a + b
    }
    
    /**
     * Subtract two numbers (a - b)
     */
    override fun subtract(a: Double, b: Double): Double {
        return a - b
    }
    
    /**
     * Multiply two numbers
     */
    override fun multiply(a: Double, b: Double): Double {
        return a * b
    }
    
    /**
     * Divide two numbers (a / b)
     * Throws an exception if attempting to divide by zero
     */
    override fun divide(a: Double, b: Double): Double {
        if (b == 0.0) {
            throw IllegalArgumentException("Division by zero is not allowed")
        }
        return a / b
    }
}
