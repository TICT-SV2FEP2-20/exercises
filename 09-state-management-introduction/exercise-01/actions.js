/**
 * In deze file vind je de action creators. Een action creator is een functie
 * die een action object returnt. Een action object heeft de volgende signature:
 * ```
 * {
 *   type: "SOME_TYPE", // Een string met de action type
 *   payload: 1 // Een optionele payload waar de reducer iets mee kan
 * }
 * ```
 * 
 * Opdracht:
 * Implementeer de drie actions
 */

/**
 * `increment`
 * Als deze action gedispatched wordt hoogt de state op met een standaard waarde
 * van 1, deze waarde is door de gebruiker van de action aan te passen
 * 
 * 1. Deze functie returnt een action object met als type 'INCREMENT'
 * 2. De payload van het action object is standaard 1
 * 3. De gebruiker kan een andere waarde als payload mee geven
 */
const increment = (amount = 1) => {
  return {
    type: 'INCREMENT',
    payload: amount
  }
}

/**
 * `decrement`
 * Als deze action gedispatched wordt verlaagt de state op met een standaard 
 * waarde van 1, deze waarde is door de gebruiker van de action aan te passen
 * 
 * 1. Deze functie returnt een action object met als type 'DECREMENT'
 * 2. De payload van het action object is standaard 1
 * 3. De gebruiker kan een andere waarde als payload mee geven
 */
const decrement = (amount = 1) => {
  return {
    type: 'DECREMENT',
    payload: amount
  }
}

/**
 * `reset`
 * Als deze action gedispatched wordt, wordt de state gereset naar de initiele
 * waarde
 * 
 * 1. Deze functie returnt een action object met als type 'RESET'
 */
const reset = () => {
  return {
    type: 'RESET'
  }
}

export default {
  increment,
  decrement,
  reset,
}