export default class QuizService {
    
    getQuestions(){
        return [
            
            {
                title: 'Наименование учреждения(полное и сокращенное)',
                options: null },
            {
                title: 'Адрес учреждения /сайт/телефон/e-mail',
                options: null },
            {
                title: 'Тип:',
                options: [
                    {
                        id: 1,
                        name: 'Казенное' }, 
                    {
                        id: 2,
                        name: 'Бюджетное' }
                ]
            }

        ];
    }
}