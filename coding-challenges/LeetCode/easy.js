function expect(val) {
  return {
    toBe: function(compareVal) {
      const isEqual = val === compareVal;
      return isEqual ? { value: true } : { error: "Not Equal" };
    },
    notToBe: function(compareVal) {
      const isNotEqual = val !== compareVal;
      return isNotEqual ? { value: true } : { error: "Equal" };
    }
  };
}

// Example usages:
const result1 = expect(5).toBe(5);
console.log(result1); // Output: { value: true }

const result2 = expect(5).toBe(null);
console.log(result2); // Output: { error: "Not Equal" }

const result3 = expect(5).notToBe(null);
console.log(result3); // Output: { value: true }
