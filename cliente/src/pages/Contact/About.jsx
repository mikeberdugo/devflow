import React, { useState, useEffect } from 'react';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { ProgressBar } from 'primereact/progressbar';
import { Rating } from 'primereact/rating';
import { Base } from '../../components/Base/Base';

export  function About() {
    
    return (
        <Base>
            <div className="card">
                <h1> Escríbeme por WhatsApp, prometo no morder... ¡bueno, solo un poquito! 😜 </h1>
            </div>
        </Base>
        
    )
}
        