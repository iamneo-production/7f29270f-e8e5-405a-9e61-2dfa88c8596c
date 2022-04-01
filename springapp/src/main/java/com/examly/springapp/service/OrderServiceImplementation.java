package com.examly.springapp.service;
import com.examly.springapp.model.OrderModel;
import com.examly.springapp.model.ProductModel;
import com.examly.springapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService {

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public OrderModel placeOrder(int quantity, Long id) {
        ProductModel product = productService.getProductById(id);
        if(product == null) {
            return null;
        }

        OrderModel order = new OrderModel();
        order.setProductName(product.getProductName());
        order.setQuantity(quantity);
        order.setPrice(product.getPrice());
        order.setTotalPrice(quantity * product.getPrice());
        order.setUserId(2L);
        order.setStatus("Order Placed successfully");

        return orderRepository.save(order);
    }

    @Override
    public List<OrderModel> showOrders(Long id) {
        return orderRepository.findByUserId(id);
    }

}
