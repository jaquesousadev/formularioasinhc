import React, { useState } from 'react';
import styles from './page.module.css'
import MaskedInput from '../components/maskinput';

const MeuComponente = () => {
   
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const handleClick = () => {
    setExibirFormulario(true);
  };

  const [cpf, setCpf] = useState ('');

  return (
   <div className={styles.form}>
     
      <button
            type='button' 
            className={styles.btnprymary} 
            onClick={handleClick}>Dependentes
             
      </button>
        
        {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 1</label>)}

         {exibirFormulario && (<label className={styles.label}>Nome Completo</label>)}

            {exibirFormulario && (
                  <input 
                  name='nome_completo_dep'
                  className={styles.inputnomedep} 
                  type='text' 
                  />
            )}

        {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}
      
            {exibirFormulario && (   
               <input 
                  name='data_nasc_dep'
                  className={styles.inputdatanasc} 
                  type='date' 
               />
            )}

      {exibirFormulario && (<label className={styles.label}>RG Dependente</label>)}

            {exibirFormulario && (   
               <input
                  name='rg_dep'
                  className={styles.inputrg} 
                  type='text' 
               />
            )}

      {exibirFormulario && (<label className={styles.label}>CPF Dependente</label>)}

            {exibirFormulario && (   
               <input
                  name='cpf_dep'
                  className={styles.inputcpf} 
                  type='text'
                 
               />
            )}

      {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 2</label>)}

         {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}

            {exibirFormulario && (
               <input 
               name='nome_completo_dep2'
               className={styles.inputnomedep} 
               type='text' 
               />
            )}

        {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}
      
            {exibirFormulario && (   
               <input 
                  name='data_nasc_dep2'
                  className={styles.inputdatanasc} 
                  type='date' 
               />
            )}

         {exibirFormulario && (<label className={styles.label}>RG Dependente</label>)}

            {exibirFormulario && (   
               <input
                  name='rg_dep2'
                  className={styles.inputrg} 
                  type='text' 
               />
            )}

         {exibirFormulario && (<label className={styles.label}>CPF Dependente</label>)}

            {exibirFormulario && (   
               <input
                  name='cpf_dep2'
                  className={styles.inputcpf} 
                  type='text'
               />
            )}

      {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 3</label>)}

      {exibirFormulario && (<label className={styles.label}>Nome Completo</label>)}

         {exibirFormulario && (
               <input 
               name='nome_completo_dep3'
               className={styles.inputnomedep} 
               type='text' 
               />
         )}

      {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}

         {exibirFormulario && (   
            <input 
               name='data_nasc_dep3'
               className={styles.inputdatanasc} 
               type='date' 
            />
         )}

      {exibirFormulario && (<label className={styles.label}>RG Dependente</label>)}

         {exibirFormulario && (   
            <input
               name='rg_dep3'
               className={styles.inputrg} 
               type='text' 
            />
         )}

      {exibirFormulario && (<label className={styles.label}>CPF Dependente</label>)}

         {exibirFormulario && (   
            <input
               name='cpf_dep3'
               className={styles.inputcpf} 
               type='text'
            />
         )}

               <button 
                  className={styles.btnprymary} 
                  type='submit'>Enviar
                </button>

    </div>
  );
};

export default MeuComponente;