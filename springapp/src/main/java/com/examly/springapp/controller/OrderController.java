package com.examly.springapp.controller;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/product/{id}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public OrderModel placeOrder(@RequestBody int quantity, @PathVariable Long id) {
        return orderService.placeOrder(quantity, id);
    }

    @GetMapping("/myorders/{id}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public List<OrderModel> showOrders(@PathVariable("id") Long id) {
        return orderService.showOrders(id);
    }

}
