import React from 'react'
import MainPage from '../MainPage'
import pdc from '/pdc.pdf'
import 'pdfjs-viewer-element'


export default function ReadView() {
  return (
        <MainPage >
            <div className="bg-gray-500 w-full h-full">
                <pdfjs-viewer-element style={{ height:"85vh" }} src={pdc} viewer-path="/pdfjs-4.2.67-dist"></pdfjs-viewer-element>
                edw
            </div>
            </MainPage>
  )
}
