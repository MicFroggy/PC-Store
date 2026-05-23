import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jest from 'eslint-plugin-jest'

export default [
  // Базовые правила JavaScript
  js.configs.recommended,
  
  // React правила для всех JS/JSX файлов
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // React правила
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      
      // React Hooks правила
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Общие правила
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  
  {
    files: ['**/*.test.{js,jsx}'],
    plugins: {
      jest
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  },
  
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      'jest.setup.js',
      '__mocks__/',
      'vite.config.js'
    ]
  }
]