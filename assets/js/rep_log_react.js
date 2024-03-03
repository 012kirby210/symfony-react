import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import {RepLogApp} from "./RepLog/RepLogApp";

const root = createRoot(document.getElementById('lift-stuff-app'));

root.render(<RepLogApp />);
