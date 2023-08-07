// be.this/index.js

class BeThis {
  constructor(desiredState) {
      this.desiredState = desiredState;
  }

  fixState(currentState) {
      if (currentState.value !== this.desiredState) {
          console.log("State is not aligned! Fixing...");
          currentState.value = this.desiredState;
          console.log("State fixed to:", currentState.value);
      } else {
          console.log("State is perfect!");
      }
  }
}

module.exports = BeThis;