import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';
import MeuComponente from './form';
import MaskedInput from '../components/maskinput';
import { useState } from 'react';
import HiddenDateTimeField from '../components/inputdatahora';
import PhoneInput from '../components/phoneinput';
import CEPInput from '../components/inputcep';




<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap" rel="stylesheet"></link>
<link rel="stylesheet" href="./pages/page.module.css" />
</link> 



 
export default function Home() {
  const [cpf, setCpf] = useState ('');
  console.log(cpf)

  const [phone, setPhone] = useState('');

  const [cep, setCep] = useState('');

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

   

   return (
    <main className={styles.main}> 
     <div className={styles.cardform}>
      <div className={styles.description}>
        <img className={styles.cardimage} src="./sindicato.png" />
            <form className={styles.form} action="https://api.sheetmonkey.io/form/kAe8xyLo8jaQAhokTE1xv7" method="POST">

              <HiddenDateTimeField />

              <h1 className={styles.titulo}>Formulário de cadastro</h1>
              <h1 className={styles.textdois}>Olá, Seja bem vindo a Assistência funeral do Grupo Zelo,</h1>
              <h1 className={styles.textdois}>Este formulário é exclusivo para os associados ativos da ASSOCIACAO DOS TRABALHADORES AUTARQUICOS E FUNDACIONAIS DO HOSPITAL DAS CLINICAS DA FMUSP.</h1>
              <h1 className={styles.textdois}>A ASINHC em parceria com a CBPF está disponibilizando um benefício para os trabalhadores e colaboradores do Hospital das Clínica, 
              um plano funerário gratuito para o associado da ASINHC (os depentendes terão o custo de R$ 5,60 por pessoa).</h1>
              <h1 className={styles.textdois}>
              Ao adquirir o plano funeral, os clientes terão a vantagem de descontos em farmácias, exames e consultas em clínicas. Além disso, será disponibilizado um serviço de telemedicina com 25 especialidades, disponível 24 horas por dia. 
              Também poderão usufruir de descontos em grandes lojas e terão acesso exclusivo a um aplicativo chamado Ducash.
              </h1>
             
                <label className={styles.label}>Titular Associado*</label>
                <input 
                  name='Nome_Titular'
                  className={styles.input} 
                  type='text' 
                  required                 
                />
                <label className={styles.labeltituloinput}>Dependente 1</label>
                <label className={styles.label}>Nome Completo*</label>
                <input 
                  name='Nome_Dep_1'
                  className={styles.inputnomedep} 
                  type='text' 
                />

                <label className={styles.label}>Data de Nascimento*</label>
                <input
                  name='Data_Nasc_Dep_1' 
                  className={styles.inputdatanasc} 
                  type='date'
                  required  
                  
                />
                
                <label className={styles.label}>RG*</label> 
                <input
                  name='RG_Dep_1'  
                  className={styles.inputrg} 
                  type='text'
                  required  
                  
                />
                <label className={styles.label}>CPF*</label>                
                <MaskedInput                            
                  name='CPF_Dep_1'
                  className={styles.inputcpf} 
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                  required             
                />

                <label className={styles.labeltituloinput}>Dependente 2</label>
                <label className={styles.label}>Nome Completo</label>
                <input 
                  name='Nome_Dep_2'
                  className={styles.inputnomedep} 
                  type='text' 
                />

                <label className={styles.label}>Data de Nascimento</label>
                <input
                  name='Data_Nasc_Dep_2' 
                  className={styles.inputdatanasc} 
                  type='date'
                    
                  
                />
                
                <label className={styles.label}>RG</label> 
                <input
                  name='RG_Dep_2'  
                  className={styles.inputrg} 
                  type='text'
                  
                  
                />
                <label className={styles.label}>CPF</label>                
                <input                            
                  name='CPF_Dep_2'
                  className={styles.inputcpf}                             
                />

                <label className={styles.labeltituloinput}>Dependente 3</label>
                <label className={styles.label}>Nome Completo</label>
                <input 
                  name='Nome_Dep_3'
                  className={styles.inputnomedep} 
                  type='text' 
                />

                <label className={styles.label}>Data de Nascimento</label>
                <input
                  name='Data_Nasc_Dep_3' 
                  className={styles.inputdatanasc} 
                  type='date'             
                />
                
                <label className={styles.label}>RG</label> 
                <input
                  name='RG_Dep_3'  
                  className={styles.inputrg} 
                  type='text'   
                />
                
                <label className={styles.label}>CPF</label>                
                <input                            
                  name='CPF_Dep_3'
                  className={styles.inputcpf}                 
                />
                
                <MeuComponente />
        </form>
         
      </div>
      </div>
      
    </main>
    
  )
}
