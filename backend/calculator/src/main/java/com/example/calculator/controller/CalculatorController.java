package com.example.calculator.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.calculator.model.Calculator;

@RestController
public class CalculatorController {
    @CrossOrigin(origins = {"http://localhost:8000", "http://127.0.0.1:8000"})
    @GetMapping("/add")
    public Calculator add(@RequestParam(value="num1",defaultValue="0")double num1,
    @RequestParam(value="num2",defaultValue="0")double num2){
        double add = num1 + num2;
        return new Calculator(add);
    }
    @CrossOrigin(origins = {"http://localhost:8000", "http://127.0.0.1:8000"})
    @GetMapping("/sub")
    public Calculator sub(@RequestParam(value="num1",defaultValue="0")double num1,
    @RequestParam(value="num2",defaultValue="0")double num2){
        double sub = num1 - num2;
        return new Calculator(sub);
    }
}
