package com.examly.springapp.controller;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.request.OrderRequest;
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
    public OrderModel placeOrder(@RequestBody OrderRequest orderRequest, @PathVariable Long id) {
        return orderService.placeOrder(orderRequest.getQuantity(),orderRequest.getUsername(), id);
    }

    @GetMapping("/myorders/{id}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public List<OrderModel> showOrders(@PathVariable("id") String id) {
        return orderService.showOrders(id);
    }
    @PostMapping("/saveOrder/{id}")
    @CrossOrigin(origins = "http://localhost:4200/")
    public List<OrderModel> saveProduct(@PathVariable("id") String id) {
        return orderService.saveProduct(id);
    }
    
    @GetMapping("/admin/orders/")
    @CrossOrigin(origins = "http://localhost:4200/")
    public List<OrderModel> getUserProducts() {
        return orderService.getUserProducts();
    }
    
}

