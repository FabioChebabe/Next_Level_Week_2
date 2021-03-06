// import React, { useState, FormEvent } from 'react'
// import { useHistory } from 'react-router-dom'

// import './styles.css'

// import PageHeader from '../../components/PageHeader'
// import Input from '../../components/Input'

// import warningIcon from '../../assets/images/icons/warning.svg'
// import Textarea from '../../components/Textarea'
// import Select from '../../components/Select'
// import api from '../../services/api'

// function TeacherForm() {

//     const history = useHistory();
//     const [name, setName] = useState('');
//     const [avatar, setAvatar] = useState('');
//     const [whatsapp, setWhatsapp] = useState('');
//     const [bio, setBio] = useState('');

//     const [subject, setSubject] = useState('');
//     const [cost, setCost] = useState('');

//     const [scheduleItems, setScheduleItems] = useState([
//         { week_day: 0, from: '', to: '' }
//     ]);

//     function addNewScheduleItem() {
//         setScheduleItems([
//             ...scheduleItems,
//             { week_day: 0, from: '', to: '' }

//         ]);
//     }

//     function setScheduleItemValue(position: number, field: string, value: string) {
//         const updtatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
//             if (index === position) {
//                 return { ...scheduleItem, [field]: value };
//             }
//             return scheduleItem;
//         })
//         setScheduleItems(updtatedScheduleItems);
//     }

//     function handleCreateClass(e: FormEvent) {
//         e.preventDefault();

//         api.post('classes', {
//             name,
//             avatar,
//             whatsapp,
//             bio,
//             subject,
//             cost: Number(cost),
//             schedule: scheduleItems
//         }).then(() => {
//             alert('Cadastro realizado com sucesso!!')

//             history.push('/');
//         }).catch(() => {
//             alert('Erro no cadastro!')
//         })
//     }

//     return (
//         <div id="page-teacher-form" className="container">
//             <PageHeader title="Que incr??vel que voc?? quer dar aulas."
//                 description="O primeiro passo ?? preencher esse formul??rio de inscri????o" />
//             <main>
//                 <form onSubmit={handleCreateClass} >

//                     <fieldset>
//                         <legend>Seus Dados</legend>
//                         <Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }} />
//                         <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
//                         <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
//                         <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />

//                     </fieldset>

//                     <fieldset>
//                         <legend>Sobre a aula</legend>
//                         <Select
//                             name="subject"
//                             label="Materia"
//                             value={subject}
//                             onChange={(e) => { setSubject(e.target.value) }}
//                             options={[
//                                 { value: 'Artes', label: 'Artes' },
//                                 { value: 'Biologia', label: 'Biologia' },
//                                 { value: 'Ci??ncias', label: 'Ci??ncias' },
//                                 { value: 'Educa????o F??sica', label: 'Educa????o F??sica' },
//                                 { value: 'Portugu??s', label: 'Portugu??s' },
//                                 { value: 'Qu??mica', label: 'Qu??mica' },
//                                 { value: 'Matem??tica', label: 'Matem??tica' },
//                                 { value: 'F??sica', label: 'F??sica' },
//                                 { value: 'Hist??ria', label: 'Hist??ria' },
//                                 { value: 'Filosofia', label: 'Filosofia' },
//                                 { value: 'Sociologia', label: 'Sociologia' },
//                                 { value: 'Literatura', label: 'Literatura' },
//                                 { value: 'Ingl??s', label: 'Ingl??s' },
//                                 { value: 'Espanhol', label: 'Espanhol' },
//                             ]}
//                         />
//                         <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => { setCost(e.target.value) }} />

//                     </fieldset>

//                     <fieldset>
//                         <legend>Hor??rios dispon??veis
//                         <button type="button" onClick={addNewScheduleItem}>
//                                 + Novo hor??rio
//                         </button>
//                         </legend>

//                         {scheduleItems.map((scheduleItem, index) => {
//                             return (
//                                 <div key={scheduleItem.week_day} className="schedule-item">
//                                     <Select
//                                         name="week_day"
//                                         label="Dia da semana"
//                                         value={scheduleItem.week_day}
//                                         onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
//                                         options={[
//                                             { value: '0', label: 'Domingo' },
//                                             { value: '1', label: 'Segunda-feira' },
//                                             { value: '2', label: 'Ter??a-feira' },
//                                             { value: '3', label: 'Quarta-feira' },
//                                             { value: '4', label: 'Quinta-feira' },
//                                             { value: '5', label: 'Sexta-feira' },
//                                             { value: '6', label: 'S??bado' },
//                                         ]}
//                                     />
//                                     <Input
//                                         name="from"
//                                         label="Das"
//                                         type="time"
//                                         value={scheduleItem.from}
//                                         onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
//                                     />
//                                     <Input
//                                         name="to"
//                                         label="At??"
//                                         type="time"
//                                         value={scheduleItem.to}
//                                         onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
//                                     />
//                                 </div>
//                             )
//                         })}

//                     </fieldset>

//                     <footer>
//                         <p>
//                             <img src={warningIcon} alt="Aviso Importante" />
//                         Importante! <br />
//                         Preencha todos os dados
//                     </p>
//                         <button type="submit">
//                             Salvar cadastro
//                     </button>
//                     </footer>
//                 </form>
//             </main>
//         </div>
//     )
// }

// export default TeacherForm


import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'; /*Para poder redirecionar o usu??rio depois que uma a????o acontece.*/

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  /*Para que o React crie os componentes de forma din??mica, utiliza-se objetos com useState */
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  /*Necess??rio desestruturar, pois o useState retorna um Array, e o primeiro item ?? o objetos que queremos, e o segundo item ?? uma fun????o para podermos alterar esse objeto.*/
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  /*Fun????o que criar uma novo hor??rio.*/
  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, /*Copiando o array, e depois adicionando um novo item.*/
      { week_day: 0, from: '', to: '' }
    ]);

  }

  /*Fun????o para alterar os campos dos hor??rios dispon??veis.*/
  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      /*Se a posi????o corresponde ao ??ndice do item no map, altera o campo com o valor recebido.*/
      if(index === position) {
        return { ...scheduleItem, [field]: value }; /*Utiliza os colchetes para n??o alterar o nome da propriedade.*/
      }

      return scheduleItem; /*Caso o ??ndice seja diferente da posi????o.*/
    });

    setScheduleItems(updatedScheduleItems);
  }

  /*Fun????o que cria uma nova aula.*/
  function handleCreateClass(e: FormEvent) {
    e.preventDefault(); /*N??o dar reload na p??gina ao clicar em salvar.*/

    /*Par??metros: rota, informa????es a serem passadas.*/
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost), /*Pois a API recebe o cost como n??mero.*/
      schedule: scheduleItems /*Como o nome e o valor n??o s??o os mesmos, ?? necess??rio usar o dois pontos, e informar o valor.*/
    }).then(() => { /*Caso ocorra tudo certo.*/
      alert('Cadastro realizado com sucesso!')

      history.push('/'); /*Redirecionar o usu??rio para a p??gina inicial.*/
    }).catch(() => { /*Caso ocorra algum erro.*/
      alert('Erro ao tentar realizar o cadastro!')
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incr??vel que voc?? quer dar aulas."
        description="O primeiro passo ?? preencher esse formul??rio de inscri????o"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Mat??ria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Educa????o f??sica', label: 'Educa????o f??sica' },
                { value: 'F??sica', label: 'F??sica' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Hist??ria', label: 'Hist??ria' },
                { value: 'Matem??tica', label: 'Matem??tica' },
                { value: 'Portugu??s', label: 'Portugu??s' },
                { value: 'Qu??mica', label: 'Qu??mica' },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Hor??rios dispon??veis
            <button type="button" onClick={addNewScheduleItem}>
                + Novo hor??rio
            </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Ter??a-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'S??bado' },
                    ]}
                  />

                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                  />

                  <Input 
                    name="to" 
                    label="At??" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;