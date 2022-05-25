// import { Link } from 'react-router-dom';
import {useState,useRef} from 'react';

import genClasses from './cardGen.module.css';
import CustomButton from '../../common/CustomButton';
import PrintButton from '../../common/PrintButton';
import SimpleButton from '../../common/SimpleButton';

function CardGen() {
    const [name,setName] = useState("Titulo");
    const [icon,setIcon] = useState("icono");
    const [color,setColor] = useState("red");
    const [content,setContent] = useState("Este es un contenido");

    const inputEl = useRef(null);
    const inputE2 = useRef(null);
    const inputE3 = useRef(null);
    const inputE4 = useRef(null);

    function actualizar() {
        setName(inputEl.current.value);
        setIcon(inputE2.current.value);
        setColor(inputE3.current.value);
        setContent(inputE4.current.value);
        console.log(inputE4.current.value);
    }
    return (
        <>
        <div className={genClasses.header}>
        Bienvenido a GridTournament , una coleccion de conceptos con CSS grid
        </div>
        <div className={genClasses.contenedor}>

            <div className={genClasses.options}>
                <div className={genClasses.botonera}>
                    <CustomButton buttonName="Ayuda" color="#5bc0de" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Borrar Todo" color="$c12e2a" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Cargar Ejemplo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Cargar Archivo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Grabar Archivo" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Ordenar" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Map/Filter" color="#428bca" onClick={() => {console.log("hola")} }/>
                    <CustomButton buttonName="Generar Mazo" color="#5cb85c" onClick={() => {console.log("hola")} }/>

                </div>
                <div className={genClasses.pageSettings}>
                    <SimpleButton buttonName="Cargar Ejemplo"/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <SimpleButton/>
                    <PrintButton/>
                    <PrintButton/>
                </div>
                <div className={genClasses.defaultSettings}>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                    <button>Boton</button>
                </div>
            </div>
            <div className={genClasses.form}>
            <div className={genClasses.formbox}>
            <CustomButton buttonName="Borrar Carta" color="#428bca" onClick={() => {console.log("hola")} }/>
            <CustomButton buttonName="Agregar Carta" color="#428bca" onClick={() => {console.log("hola")} }/>
            <CustomButton buttonName="Duplicar Carta" color="#428bca" onClick={() => {console.log("hola")} }/>
            <CustomButton buttonName="Aplicar cambios" color="red" onClick={() => {actualizar()} }/>
            <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label for="selected-card" class="col-sm-2 control-label">Deck</label>
                        <div class="col-sm-10">
                            <p class="form-control-static" id="total_card_count">Deck contains 0 cards.</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="selected-card" class="col-sm-2 control-label">Card</label>
                        <div class="col-sm-10">
                            <select class="form-control" id="selected-card"></select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label"></label>
                        <div class="col-sm-4">
                            <button type="button" class="btn btn-danger btn-block" id="button-delete-card">Delete card</button>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-primary btn-block" id="button-add-card">Add new card</button>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-primary btn-block" id="button-duplicate-card">Duplicate card</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-title" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-10">
                            <input ref={inputEl} type="text" id="card-title" class="form-control" placeholder="Title"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-title-size" class="col-sm-2 control-label">Title</label>
                        <div class="col-sm-10">
                            <select class="form-control" id="card-title-size" data-property="title_size">
                                <option value="" selected>default font</option>
                                <option value="16">16pt font</option>
                                <option value="15">15pt font</option>
                                <option value="14">14pt font</option>
                                <option value="13">13pt font</option>
                                <option value="12">12pt font</option>
                                <option value="11">11pt font</option>
                                <option value="10">10pt font</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-count" class="col-sm-2 control-label">Count</label>
                        <div class="col-sm-10">
                            <input type="number" id="card-count" class="form-control" placeholder="Count" data-property="count" value="1"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-tags" class="col-sm-2 control-label">Tags</label>
                        <div class="col-sm-10">
                            <input type="text" id="card-tags" class="form-control" placeholder="Tags"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-icon" class="col-sm-2 control-label">Icon</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <span class="input-group-btn">
                                    <button class="btn btn-default icon-select-button" type="button">Search</button>
                                </span>
                                <input ref={inputE3} type="text" id="card-icon" class="form-control icon-list" placeholder="Default icon" data-property="icon"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-icon-back" class="col-sm-2 control-label">Back icon</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <span class="input-group-btn">
                                    <button class="btn btn-default icon-select-button" type="button">Search</button>
                                </span>
                                <input type="text" id="card-icon-back" class="form-control icon-list" placeholder="Same as front" data-property="icon_back"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-color" class="col-sm-2 control-label">Color</label>
                        <div class="col-sm-10">
                            <div class="input-group">
                                <select id="card_color_selector" class="colorselector-data"></select>
                                <input ref={inputE2}  type="text" id="card-color" class="form-control" placeholder="Default color" data-property="color"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-background" class="col-sm-2 control-label">Background</label>
                        <div class="col-sm-10">
                            <input type="text" id="card-background" class="form-control" placeholder="Background image URL" data-property="background_image"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="card-contents" class="col-sm-2 control-label">Contents</label>
                        <div class="col-sm-10">
                            <textarea ref={inputE4}  class="form-control" rows="14" id="card-contents"></textarea>
                        </div>
                    </div>
                </form>

            </div>
            </div>
            <div className={genClasses.preview}>
            <div className={genClasses.card} >
                <p>{name}</p>
                <p>{icon}</p>
                <p>{color}</p>
                <p>{content}</p>
            </div>
            <div className={genClasses.card} ></div>
            </div>
            
        </div>
        </>
    )
}

export default CardGen;