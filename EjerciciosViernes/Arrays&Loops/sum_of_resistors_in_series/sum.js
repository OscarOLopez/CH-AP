let option = prompt("Escoge el ejercicio (Suma de Resistencias, Sociedad Secreta, Multiplica Array");
switch (option){
    case "Suma de Resistencias":
        /* 
        Calculate the sum of all resistors connected in series.

        Examples:
        - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
        - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
        - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

        Note: This approach uses the absolute value of each resistance to ensure all values are positive.
        */

        function sumResistance() {
            const resistancesInput = prompt("Enter resistances separated by commas:");
            if (!resistancesInput) {
              alert("No input provided");
              return;
            }
          
            const resistances = resistancesInput.split(",").map(Number);
            if (!Array.isArray(resistances) || resistances.some(isNaN)) {
              alert("Invalid input: resistances must be an array of numbers");
              return;
            }
          
            const sum = resistances.reduce((acc, current) => acc + current, 0);
            alert(`The sum of the resistances is: ${sum.toFixed(2)} ohms`);
          }
          
          sumResistance();
    break;
    case "Sociedad Secreta":
        /*
        Find the name of a secret society based on the first letter of each member's name.
        Examples:
        - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
        - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
        - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`. 
        */
        
        function secretSociety() {
            let members = [];
            while (true) {
                let member = prompt("Enter a member's name (or 'done' to finish): ");
                if (member.toLowerCase() === 'done') break;
                members.push(member);
            }
            if (members.length === 0) return ''; // Handle the case with no members
            return members.map(member => member.charAt(0)).join('');
        }
        
        console.log(secretSociety());
        break;
    case "Multiplica Array":
        /**
            Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
            Examples:
            - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
            - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`. 
         */

        function  arrayMultiplos() {
            let num = parseInt(prompt("Enter a number:"));
            let length = parseInt(prompt("Enter the length of the array:"));
            let array = [];
            for (let i = 0; i < length; i++) {
                array.push(num * (i + 1));
                }
                return array;
                }
                console.log(arrayMultiplos());
                break;



}




