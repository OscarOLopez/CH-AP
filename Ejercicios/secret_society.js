/**
 * - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
    - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
    - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
    1. Entrada un array de nombres
    2. Variable para guardar el nombre de la sociedad secretSocietyName
    3. Recorrer el array con un map
    4. Ordenar el array en orden alfabetico
    5. Recoger la primer letra de cada elemento y guardarla en secretSocietyName poner la en mayuscula
    6. 
    N. Nombre de sociedad secreta, formado por un string que tiene la primer letra de cada elemento del array
    */

    const secretName = (members)  => {
        let secretSocietyName =  '';
        const sortedMembers =  members.sort();
        const initials = sortedMembers.map(member => member[0]);
        secretSocietyName = initials.map(initial => initial.toUpperCase()).join('');
        return secretSocietyName;
    }
    console.log(secretName(["Esperanza",  "Franco", "Nia"]));
    console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
    console.log(secretName(['Harry', 'Ron', 'Hermione']));