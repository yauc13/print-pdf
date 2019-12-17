
import { Question } from '../model/Question';
import { Module } from '../model/Module';

class PlantillaPDF {

    public header(imageInst, imageSoft): any {
        return {
            margin: 20,
            columns: [
                {
                    table: {
                        widths: ['0%', '100%', '0%'],

                        body: [
                            [
                               {},

                                {
                                   
                                  
                                   // color: '#444',
                                    table: {
                                        widths: [ '60%', '40%'],
                                        headerRows: 2,
                                        // keepWithHeaderRows: 1,
                                        body: [
                                            [
                                                {
                                                    text: 'IPS Horizonte Social la Esperanza S.A.S,NIT 9010113951',
                                                    fontSize: 9,
                                                    colSpan: 2,
                                                    border: [false, false, false, false],
                                                    alignment: 'center',
                                                },
                                                {},
                                               
                                            ],
                                            [
                                                {
                                                    text: 'Sede: Santander de Quilichao,Santander De Quilichao - Cauca,Carrera 11 # 8-30 - Teléfono: 8361095',
                                                    fontSize: 9,
                                                    colSpan: 2,
                                                    border: [false, false, false, false],
                                                    alignment: 'center',
                                                },
                                                {}
                                            ],
                                            [
                                                {
                                                    text: 'HISTORIA CLÍNICA',
                                                    fontSize: 12,
                                                    colSpan: 2,
                                                    border: [false, false, false, false],
                                                    alignment: 'center',
                                                },
                                                {}
                                            ],
                                            [
                                                {
                                                    text: 'Nombre: JUAN LATA YUQUILEMA', 
                                                    fontSize: 9,                                                                                                      
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: 'Sexo : Masculino',    
                                                    fontSize: 9,                                                                                                   
                                                    alignment: 'right',
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'Identificación : CE 136989',    
                                                    fontSize: 9,                                                                                                   
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: 'Edad: 75 Año(s)',   
                                                    fontSize: 9,                                                                                                    
                                                    alignment: 'right',
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'Contrato : NUEVO PROGRAMA RIESGO CARDIOVASCULAR -SUBSIDIADO',   
                                                    fontSize: 9,                                                                                                    
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: 'Historía: No. 136989 - Folio: 9',   
                                                    fontSize: 9,                                                                                                    
                                                    alignment: 'right',
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'Etnia : Indígenas',   
                                                    fontSize: 9,                                                                                                    
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: 'Tipo de Usuario : Subsidiado',    
                                                    fontSize: 9,                                                                                                   
                                                    alignment: 'right',
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'Dirección : CRA 24G N 14A 40 Teléfono : 3104569772',                                                                                                       
                                                    fontSize: 9,
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: '',    
                                                    fontSize: 9,                                                                                                   
                                                    alignment: 'right',
                                                }
                                            ],
                                            [
                                                {
                                                    text: 'Responsable ó acompañante: MARGARITA LATA -',   
                                                    fontSize: 9,                                                                                                    
                                                    alignment: 'left',
                                                },
                                                {
                                                    text: '09/10/2019 07:24 PM', 
                                                    fontSize: 9,                                                                                                      
                                                    alignment: 'right',
                                                }
                                            ],
                                        ],
                                    },


                                },
                                {}
                                

                            ]
                        ]
                    },

                    layout: 'noBorders'
                },
                

            ]
        }
    }


    list = [['file 1', 'file 2', 'file 3'],
    ['file 2', 'file 2', 'file 3'],
    ['file 3', 'file 2', 'file 3']]

    listQuestion = [{
        text: 'pregunta 1: respuesta 1',
        //style: 'tableHeader',
        alignment: 'center'
    }, {
        text: 'pregunta 2: respuesta 2',
        //style: 'tableHeader',
        alignment: 'center'
    }, {
        text: 'pregunta 3: respuesta 3',
        // style: 'tableHeader',
        alignment: 'center'
    }]


    content = [

        this.createPrintListModule(this.createListModule(10, 20)),

        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: ['100%'],
                headerRows: 2,

                // keepWithHeaderRows: 1,
                body: [
                    [

                        {
                            text: 'Nombre del modulo',
                            fontSize: 18,
                            color: 'black',
                            background: 'green',
                            colSpan: 1,
                            borderColor: ['green', 'green', 'green', 'green'],
                            alignment: 'center',
                        }
                    ],
                    [
                        {
                            text: 'pregunta 1: respuesta 1; pregunta 2: respuesta 2; pregunta 3: respuesta 3;pregunta 1: respuesta 1; pregunta 2: respuesta 2; pregunta 3: respuesta 3',
                            fontSize: 12,
                            color: 'black',
                            alignment: 'left',
                        }
                    ]
                ],
            },
        },




        {
            table: {
                widths: ['25%', '50%', '25%'],
                body: this.list
            }
        },
        {
            table: {
                widths: ['25%', '50%', '25%'],
                body: [
                    ['Column with a lot of text. Column with a lot of text. Column with a lot of text. Column with a lot of text.',
                        {
                            text: 'I\'m aligned center',
                            style: {
                                alignment: 'center',
                            },
                            relativePosition: {
                                x: 0,
                                y: 25,
                            }
                        },
                        {
                            text: 'I\'m aligned right',
                            style: {
                                alignment: 'right',
                            },
                            relativePosition: {
                                x: 0,
                                y: 25,
                            }
                        }]
                ]
            }
        },
        {
            margin: 8,
            columns: [
                {
                    table: {
                        widths: ['25%', '50%', '25%'],

                        body: [
                            [
                                {
                                    image: 'data:image/jpeg;base64,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',
                                    width: 80, height: 60,
                                },

                                {
                                    text: 'titulo',
                                    width: 80, height: 60,
                                    alignment: 'center'
                                },

                                {
                                    image: 'data:image/jpeg;base64,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',

                                    width: 80, height: 40,
                                    alignment: 'right'
                                }
                            ]
                        ]
                    },
                    layout: 'noBorders'
                }

            ]
        }
    ]


    public createListModule(totalM: number, totalQ: number): any {
        var listM: Array<Module> = new Array();
        for (var j = 0; j < totalQ; j++) {
            var m: Module = new Module()
            m.resQuestionModule = ''
            var listQ: Array<Question> = new Array;
            for (var i = 0; i < totalQ; i++) {
                var q: Question = new Question()
                q.idQuestion = i
                q.nameQuestion = 'question ' + i
                q.resPrintQuestion = 'respuesta ' + i
                m.resQuestionModule += q.nameQuestion + ': ' + q.resPrintQuestion + '; '
                listQ.push(q)
            }
            m.idModule = j
            m.nameModule = 'nombre modulo ' + j
            m.listQuestion = listQ
            listM.push(m)
        }
        return listM;
    }

    public createPrintListModule(listModule: Array<Module>): any {
        var listPrint = new Array();
        for (let item of listModule) {
            listPrint.push({
                style: 'tableExample',

                color: '#444',
                table: {
                    widths: ['100%'],
                    headerRows: 2,

                    // keepWithHeaderRows: 1,
                    body: [
                        [

                            {
                                text: item.nameModule,
                                fontSize: 16,
                                color: 'black',
                                fillColor: '#eeeeee', border: [false, false, false, false],
                                colSpan: 1,
                                borderColor: ['green', 'green', 'green', 'green'],
                                alignment: 'center',
                            }
                        ],
                        [
                            {
                                text: item.resQuestionModule,
                                fontSize: 10,
                                color: 'black',
                                alignment: 'left',
                                border: [false, false, false, false],

                            }
                        ]
                    ],
                },
            }
            );
        }
        return listPrint
    }

}
const plantillaPDF = new PlantillaPDF;
export default plantillaPDF;
