package com.examly.springapp.service;
import com.examly.springapp.model.OrderModel;

import java.util.List;

public interface OrderService {
    OrderModel placeOrder(int quantity, Long id);
    
    List<OrderModel> showOrders(Long id);

}
