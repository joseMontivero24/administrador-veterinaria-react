import { Paciente } from "./Paciente"


export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center dark:text-white">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center font-medium dark:text-white">
            Administra tus {''}
            <span className="text-sky-600 font-bold">Pacientes y Citas</span>
          </p>   

          { pacientes.map( paciente =>(
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            
            />
          ))}
        
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center dark:text-white">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center font-medium dark:text-white">
            Comienza agregando  {''}
            <span className="text-sky-600 font-bold">pacientes</span>
          </p>
        
        </>
      )}

      
      
      
      
    </div>
  )
}
