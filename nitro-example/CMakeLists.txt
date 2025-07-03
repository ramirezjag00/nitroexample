cmake_minimum_required(VERSION 3.13)

# Configure the lib name (same as in nitro.json)
set(PACKAGE_NAME "NitroExample")

# Add project command (required by CMake)
project(${PACKAGE_NAME})

# Set C++ Standard
set(CMAKE_CXX_STANDARD 20)

# Create library
add_library(
  ${PACKAGE_NAME}
  SHARED
  # Required cpp-adapter for JNI_OnLoad
  src/main/cpp/cpp-adapter.cpp
  # You can add your custom C++ files here
  # Example: src/main/cpp/MyHybridObject.cpp
)

# Use generated autolinking as intended by Nitrogen
include(${CMAKE_SOURCE_DIR}/../nitrogen/generated/android/NitroExample+autolinking.cmake)
