 
export class Usuario{
    constructor(
        public nombre:string,
        public edad:number,
        public estadoCivil:string,
        public dni:string,
        public lugarNacimiento:string

        ){
           
            function getName() {   
                return nombre;
                
            }
            function setName(name){
                nombre:name;
            }
            function getAge() {   
                return edad;
                
            }
            function setAge(age){
                edad:age;
            }
            function getDni() {   
                return dni;
                
            }
            function setDni(dni){
                dni:dni;
            }
            function setEstadoCivil(estado){
                estadoCivil:estado
            }
            function getEstadoCivil(){
                return estadoCivil;
            }
            function setLugar(lugar){
                lugarNacimiento:lugar;
            }
            function getLugar(){
                return lugarNacimiento;
            }
        }
}