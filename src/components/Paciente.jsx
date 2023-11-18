import { confirmAlert } from "react-confirm-alert";
// import 'react-confirm-alert/src/react-confirm-alert.css';
import "../modalStyles.css";

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    confirmAlert({
      title: 'Confirmar Eliminación',
      message: '¿Deseas eliminar este paciente?',
      buttons: [
        {
          label: 'Confirmar',
          onClick: () => {
            eliminarPaciente(id);
          },
        },
        {
          label: 'Cancelar',
          onClick: () => {
          },
        },
      ],
    });
  };

  return (
    <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-xl dark:bg-neutral-800">
             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
               Nombre: {''}
               <span className="font-normal normal-case">{nombre}</span>
             </p>

             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
               Propietario: {''}
               <span className="font-normal normal-case">{propietario}</span>
             </p>

             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
               Email: {''}
               <span className="font-normal normal-case">{email}</span>
             </p>

             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
               Fecha de Alta: {''}
               <span className="font-normal normal-case">{fecha}</span>
             </p>

             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
              Sintomas: {''}
               <span className="font-normal normal-case">{sintomas}</span>
             </p>

             <div className="flex justify-between mt-8">
               <button 
                 type="button"
                 className="py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase rounded-lg"
                 onClick={() => setPaciente(paciente)}
               ><i className="fa-regular fa-pen-to-square pr-1"></i>Editar</button>

               <button 
               type="button"
               className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
               onClick={handleEliminar}
               ><i className="fa-regular fa-trash-can pr-1"></i>Eliminar</button>
             </div>
         </div>
  );
};


// export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

//   const {nombre, propietario, email, fecha, sintomas, id} = paciente;

//   const handleEliminar = () =>{
//     const respuesta = confirm('¿Deseas eliminar este paciente?')

//     if (respuesta) {
//       eliminarPaciente(id)
//     }
//   }

//   return (
//         <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-xl dark:bg-neutral-800">
//             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
//               Nombre: {''}
//               <span className="font-normal normal-case">{nombre}</span>
//             </p>

//             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
//               Propietario: {''}
//               <span className="font-normal normal-case">{propietario}</span>
//             </p>

//             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
//               Email: {''}
//               <span className="font-normal normal-case">{email}</span>
//             </p>

//             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
//               Fecha de Alta: {''}
//               <span className="font-normal normal-case">{fecha}</span>
//             </p>

//             <p className="font-bold mb-3 text-gray-700 uppercase dark:text-white">
//               Sintomas: {''}
//               <span className="font-normal normal-case">{sintomas}</span>
//             </p>

//             <div className="flex justify-between mt-8">
//               <button 
//                 type="button"
//                 className="py-2 px-10 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase rounded-lg"
//                 onClick={() => setPaciente(paciente)}
//               ><i className="fa-regular fa-pen-to-square pr-1"></i>Editar</button>

//               <button 
//               type="button"
//               className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
//               onClick={handleEliminar}
//               ><i className="fa-regular fa-trash-can pr-1"></i>Eliminar</button>
//             </div>
//         </div>
//     )
// }
