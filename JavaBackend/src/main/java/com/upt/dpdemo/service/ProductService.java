package com.upt.dpdemo.service;

import java.util.Date;
import java.util.List;

import com.upt.dpdemo.exception.ProductNotFoundException;
import com.upt.dpdemo.model.Product;
import com.upt.dpdemo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public List<Product> searchProductsByName(String name){
        return productRepository.findByNameStartsWithIgnoreCase(name);
    }

    public Product getProductById(Long id){
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }

    public Product createProduct(Product product){
        product.setDateAdded(new Date());
        return productRepository.save(product);
    }

    public Product updateProduct(Product product, Long id){
        return productRepository.findById(id).map(dbProduct -> {
            dbProduct.setName(product.getName());
            dbProduct.setDescription(product.getDescription());
            return productRepository.save(dbProduct);
        }).orElseGet(() -> {
            product.setId(id);
            return productRepository.save(product);
        });
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }
}
