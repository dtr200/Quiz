export default class MockDataServer {
    data = {
        'Образовательная организация №1': {
            companyAddress: "Москва, ул. Московская, д. 1",
            type: "Бюджетное",
            license: {
                idList: [3]
            },
            yearBegin: "1999",            
            children: "210",
            docsAvailable: {
                idList: [5, 6]
            },
            disabledCategory: {
                idList: [9]
            },
            amountDisabled: {
                idList: [14]
            },
            costPerOne: "53000",
            personalInfo: "Михайлов Михаил Михайлович",
            problems: "Нет проблем"     
        },
        'Образовательная организация №2': {
            companyAddress: "Москва, ул. Подмосковная, д. 2",
            type: "Казенное",
            license: {
                idList: [4]
            },
            yearBegin: "2003",            
            children: "129",
            docsAvailable: {
                idList: [7, 8]
            },
            disabledCategory: {
                idList: [10]
            },
            amountDisabled: {
                idList: [14, 15]
            },
            costPerOne: "52200",
            personalInfo: "Иринова Ирина Ириновна",
            problems: "Несколько незначительных проблем"
        }
    }

    nameFromId = {
        1: 'Казенное',
        2: 'Бюджетное',
        3: 'на осуществление медицинской деятельности',
        4: 'на осуществление образовательной деятельности',
        5: 'Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью',
        6: 'Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)',
        7: 'Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации',
        8: 'Другое',
        9: 'Разделы в Уставе учреждения об обучении и воспитании детей с инвалидностью',
        10: 'Локальные акты по работе с детьми- инвалидами (Положение об итоговой аттестации и др.)',
        11: 'Разделы о создании специальных образовательных условий для детей с инвалидностью в Программе развития организации',
        12: 'Другое',
        13: 'В классах начальной ступени (1-4 кл.)',
        14: 'В классах средней ступени (5-9 кл.)',
        15: 'В классах старшей ступени (10-11 кл.)'
    }

    getAllData(){
        return new Promise((resolve) => {
            resolve(this.data);
        })
    }

    getCompanyData(companyName){
        return new Promise((resolve, reject) => {
            const result = this.data[companyName];
            if(!result)
                return reject(new Error('Данных такой компании отсутствуют'));
            resolve(result);
        })       
    }

    getNameFromId(id){
        return new Promise((resolve, reject) => {
            const result = this.nameFromId[id];
            if(!result)
                return reject(new Error('Некорректный ID'));
            resolve(result);
        })
    }

    setNewCompany(data){
        return new Promise((resolve, reject) => {
            const name = data.companyName;
            if(!name)
                return reject(new Error('Название компании не указано'));
            this.data[name] = data;
            resolve(this.data);
        })
    }
}