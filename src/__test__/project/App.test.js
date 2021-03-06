import React from "react";
import { shallow, mount, render } from 'enzyme';
import App from '../../project/App';
import defaultSeed from "../../project/schemasJson/rootSchema.json";

describe("custom hook: useTodos", () => {

    // Este Test me sirve para ver si la app falla. prueba todo.
    it("render App with all params", () => {

        const getJsonSchemaForm = (log) => { return log };
        const rootSchema = defaultSeed;
        const rootSchemaUi = {};
        const prefix = 'formulario_';

        const wrapper = mount(
            <App
                getJsonSchemaForm={getJsonSchemaForm}
                rootSchema={rootSchema}
                rootSchemaUi={rootSchemaUi}
                prefix={prefix}
            />
        )
        const respuesta = wrapper.find('.MuiFormControl-root').at(0).text().includes('Título del Formulario')
        expect(respuesta).toEqual(true)
    })

    it("render App without any parameter", () => {
        const wrapper = mount(
            <App />
        )
        const respuesta = wrapper.find('.MuiFormControl-root').at(0).text().includes('Título del Formulario')
        expect(respuesta).toEqual(true)
    })
});