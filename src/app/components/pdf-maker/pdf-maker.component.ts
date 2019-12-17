import { Component, OnInit } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import plantillaPDF from "../../util/plantillaPDF";

@Component({
  selector: 'app-pdf-maker',
  templateUrl: './pdf-maker.component.html',
  styleUrls: ['./pdf-maker.component.css']
})
export class PdfMakerComponent implements OnInit {

  constructor() { 
    //pdfMake.createPdf(this.docDefinition).download();
    pdfMake.createPdf(this.headerExample).download();
  }

  ngOnInit() {
  }

   headerExample = {

    pageSize: 'LEGAL',
    //pageOrientation: 'landscape',
    pageMargins: [25, 200, 40, 60],
    footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
    header: plantillaPDF.header('',''),  
    
    content: plantillaPDF.content

};



}
