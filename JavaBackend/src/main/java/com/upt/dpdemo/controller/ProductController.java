package com.upt.dpdemo.controller;

import java.util.List;
import java.util.Optional;

import com.upt.dpdemo.model.Product;
import com.upt.dpdemo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//todo when going productive, only include deployment domain & localhost
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    List<Product> all() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/search")
    List<Product> search(@RequestParam("name") Optional<String> name) {
        return name.map(productService::searchProductsByName)
            .orElseGet(productService::getAllProducts);
    }

    @GetMapping("/products/id")
    Product one(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/products")
    Product newProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product product, @PathVariable Long id) {
        return productService.updateProduct(product, id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/product/{id}")
    void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
