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
            onClick={handleClick}>+ Dependentes
             
      </button>
        
        {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 4</label>)}

         {exibirFormulario && (<label className={styles.label}>Nome Completo</label>)}

            {exibirFormulario && (
                  <input 
                  name='nome_dep_4'
                  className={styles.inputnomedep} 
                  type='text' 
                  />
            )}

        {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}
      
            {exibirFormulario && (   
               <input 
                  name='data_nasc_dep_4'
                  className={styles.inputdatanasc} 
                  type='date' 
               />
            )}

      {exibirFormulario && (<label className={styles.label}>RG</label>)}

            {exibirFormulario && (   
               <input
                  name='rg_dep_4'
                  className={styles.inputrg} 
                  type='text' 
               />
            )}

      {exibirFormulario && (<label className={styles.label}>CPF</label>)}

            {exibirFormulario && (   
               <input
                  name='cpf_dep_4'
                  className={styles.inputcpf} 
                  type='text'
                 
               />
            )}

      {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 5</label>)}

         {exibirFormulario && (<label className={styles.label}>Nome Completo</label>)}

            {exibirFormulario && (
               <input 
               name='nome_completo_dep_5'
               className={styles.inputnomedep} 
               type='text' 
               />
            )}

        {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}
      
            {exibirFormulario && (   
               <input 
                  name='data_nasc_dep_5'
                  className={styles.inputdatanasc} 
                  type='date' 
               />
            )}

         {exibirFormulario && (<label className={styles.label}>RG</label>)}

            {exibirFormulario && (   
               <input
                  name='rg_dep_5'
                  className={styles.inputrg} 
                  type='text' 
               />
            )}

         {exibirFormulario && (<label className={styles.label}>CPF</label>)}

            {exibirFormulario && (   
               <input
                  name='cpf_dep_5'
                  className={styles.inputcpf} 
                  type='text'
               />
            )}

      {exibirFormulario && (<label className={styles.labeltituloinput}>DEPENDENTE 6</label>)}

      {exibirFormulario && (<label className={styles.label}>Nome Completo</label>)}

         {exibirFormulario && (
               <input 
               name='nome_dep_6'
               className={styles.inputnomedep} 
               type='text' 
               />
         )}

      {exibirFormulario && (<label className={styles.label}>Data de Nascimento</label>)}

         {exibirFormulario && (   
            <input 
               name='data_nasc_dep_6'
               className={styles.inputdatanasc} 
               type='date' 
            />
         )}

      {exibirFormulario && (<label className={styles.label}>RG</label>)}

         {exibirFormulario && (   
            <input
               name='rg_dep_6'
               className={styles.inputrg} 
               type='text' 
            />
         )}

      {exibirFormulario && (<label className={styles.label}>CPF</label>)}

         {exibirFormulario && (   
            <input
               name='cpf_dep_6'
               className={styles.inputcpf} 
               type='text'
            />
         )}

      {exibirFormulario && (
      <h1 className={styles.textdois}>Caro Associado, caso deseje cadastrar mais dependentes clique no botão <strong>"Enviar"</strong> e 
      após enviar retone a pagina inicial e cadastre os demais dependentes.</h1>
      )}

               <button 
                  className={styles.btnprymary} 
                  type='submit'>Enviar
                </button>

    </div>
  );
};

export default MeuComponente;