export default class QuizService {
    
    getQuestions(){
        return [            
            {
                id: 1,
                title: `Наименование учреждения(полное и сокращенное)`,
                options: null,
                link: false,
                input: null,
                textarea: false },
            {
                id: 2,
                title: `Адрес учреждения /сайт/телефон/e-mail`,
                options: null,
                link: false,
                input: null,
                textarea: false },
            {
                id: 3,
                title: `Тип:`,
                options: {
                    list: [
                        {
                            id: 1,
                            name: 'Казенное' }, 
                        {
                            id: 2,
                            name: 'Бюджетное' }
                    ],
                    multiple: false
                },
                link: false,
                input: null,
                textarea: false },
            {
                id: 4,
                title: `Лицензия:`,
                options: {
                    list: [
                        {
                            id: 1,
                            name: 'на осуществление медицинской деятельности' }, 
                        {
                            id: 2,
                            name: 'на осуществление образовательной деятельности' }
                    ],
                    multiple: true
                },
                link: 'one',
                input: null,
                textarea: false },
            {
                id: 5,
                title: `Год фактического начала предоставления учреждением образовательных услуг`,
                options: null,
                link: false,
                input: null,
                textarea: false },
            {
                id: 6,
                title: `Общая численность детей с инвалидностью в текущем году`,
                options: null,
                link: false,
                input: {
                    tail: 'чел.',
                    data: null
                },
                textarea: false },
            {
                id: 7,
                title: `Укажите наличие в учреждении нормативно-правового обеспечения организации
                получения образования детьми- инвалидами:`,
                options: {
                    list: [
                        {
                            id: 1,
                            name: `Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью` }, 
                        {
                            id: 2,
                            name: `Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)` },
                        {
                            id: 3,
                            name: `Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации` },
                        {
                            id: 4,
                            name: `Другое` }
                    ],
                    multiple: true
                },
                link: true,
                input: null,
                textarea: false },
            {
                id: 8,
                title: `Укажите категории детей с инвалидностью в учреждении, что обусловлено:`,
                options: {
                    list: [
                        {
                            id: 1,
                            name: `Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью` }, 
                        {
                            id: 2,
                            name: `Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)` },
                        {
                            id: 3,
                            name: `Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации` },
                        {
                            id: 4,
                            name: `Другое` }
                    ],
                    multiple: true
                },
                link: false,
                input: {
                    tail: 'чел.',
                    data: null
                },
                textarea: false },
            {
                id: 9,
                title: `Укажите количество детей с инвалидностью для обучения в классах:`,
                options: {
                    list: [
                        {
                            id: 1,
                            name: `В классах начальной ступени (1-4 кл.)` }, 
                        {
                            id: 2,
                            name: `В классах средней ступени (5-9 кл.)` },
                        {
                            id: 3,
                            name: `В классах старшей ступени (10-11 кл.)` }
                    ],
                    multiple: true
                },
                link: false,
                input: {
                    tail: 'чел.',
                    data: null
                },
                textarea: false },
            {
                id: 10,
                title: `Ежегодные затраты на содержание 1 ребенка в Вашем учреждении
                составляют`,
                options: null,
                link: false,
                input: {
                    tail: 'тыс. руб',
                    data: null
                },
                textarea: false },
            {
                id: 11,
                title: `Данные лица, заполнившего анкету:`,
                options: null,
                link: false,
                input: {
                    tail: null,
                    data: [`ФИО`, `Должность`, `Контактные телефоны (е-mail, телефон)`]
                },
                textarea: false },
            {
                id: 12,
                title: `Актуальные проблемы деятельности учреждения`,
                options: null,
                link: false,
                input: null,
                textarea: true }
        ];
    }
}