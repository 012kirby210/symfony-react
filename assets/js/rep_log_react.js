import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import {RepLogApp} from "./RepLog/RepLogApp";

const root = createRoot(document.getElementById('lift-stuff-app'));

const shouldShowParameter = true;

const itemOptions = [
    { id:"cat", value:"Cat" },
    { id:"fat_cat", value:"Big Fat Cat" },
    { id:"laptop", value:"My Laptop" },
    { id:"coffee_cup", value:"Coffee Cup" },
    {id: "invalid_item", value:"some thing"},
];

root.render(
    <>
        <RepLogApp
            shouldShowParameter={true}
            itemOptions={itemOptions}
        />
    </>
);
