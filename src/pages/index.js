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
              <p>Olá, Seja bem vindo a Assistência funeral do Grupo Zelo,</p>
              <p>Este formulário é exclusivo para os associados ativos da ASSOCIACAO DOS TRABALHADORES AUTARQUICOS E FUNDACIONAIS DO HOSPITAL DAS CLINICAS DA FMU.</p>
              <p>A ASINHC em parceria com a CBPF está disponibilizando um benefício para os trabalhadores e colaboradores do Hospital das Clínica, 
              um plano funerário gratuito para o associado da ASINHC (os depentendes terão o custo de R$ 5,60 por pessoa).</p>
              <p>
              Ao adquirir o plano funeral, os clientes terão a vantagem de descontos em farmácias, exames e consultas em clínicas. Além disso, será disponibilizado um serviço de telemedicina com 25 especialidades, disponível 24 horas por dia. 
              Também poderão usufruir de descontos em grandes lojas e terão acesso exclusivo a um aplicativo chamado Ducash.
              </p>
              <p>
              Informamos que o Grupo Zelo está realizando uma reorganização societária e, no âmbito desta reorganização, a UNION ASSISTÊNCIA FUNERAL LTDA. 
              (“UNION”) está sendo incorporada por sua única sócia COMPANHIA BRASILEIRA DE PLANOS FUNERÁRIOS S/A (“CBPF”).
              </p>
              <p>
              Neste contexto, a UNION será extinta por incorporação e a CBPF assumirá a responsabilidade por todos os direitos e obrigações ora de responsabilidade da sociedade extinta, 
              nos termos do Código Civil. Deste modo, ressaltamos todos os Contratos e Acordos Comerciais firmados pela UNION serão mantidos pela CBPF, nos mesmos termos e condições atualmente em vigor.
              </p>  

                <label className={styles.label}>Nome completo*</label>
                <input 
                  name='Nome_Titular'
                  className={styles.input} 
                  type='text' 
                  required 
                />
                <label className={styles.label}>Data de Nascimento*</label>
                <input
                  name='Data_Nascimento_titular' 
                  className={styles.inputdatanasc} 
                  type='date'
                  required  
                  
                />
                <label className={styles.label}>Celular*</label>
                <PhoneInput
                  name='Celular_titular'  
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required 
                  
                  />
                <label className={styles.label}>RG*</label> 
                <input
                  name='RG_titular'  
                  className={styles.inputrg} 
                  type='text'
                  required  
                  
                />
                <label className={styles.label}>CPF*</label>                
                <MaskedInput                            
                  name='CPF_titular'
                  className={styles.inputcpf} 
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                  required 
                  
                    
                />
                <label className={styles.label}>E-mail*</label>
                <input 
                  name='Email_titular'  
                  className={styles.input} 
                  type='email'
                  required  
                  
                />
                <label className={styles.labelend}>Endereço (Logradouro, Numero, Complemento e Bairro.)*</label>
                <input
                  name='Endereco_titular'   
                  className={styles.input} 
                  type='text' 
                  required 
                  
                />
                <label className={styles.label}>CEP*</label>
                <CEPInput
                  name='CEP_titular'   
                  value={cep}
                  onChange={handleCepChange}
                  required 
                  
                />
                <label className={styles.label}>Município*</label>
                <input 
                  name='Municipio_titular'  
                  className={styles.input} 
                  type='text'
                  required  
                  
                />
                <label className={styles.label}>UF*</label>
                <input
                  name='UF_titular'   
                  className={styles.inputuf} 
                  type='text'
                  required  
                  
                />
                <MeuComponente />
        </form>
         
      </div>
      </div>
      
    </main>
    
  )
}
