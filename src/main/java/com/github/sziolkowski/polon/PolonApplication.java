package com.github.sziolkowski.polon;

import com.github.sziolkowski.polon.model.User;
import com.github.sziolkowski.polon.repo.UserRepository;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.github.sziolkowski.polon.enumData.role;

import java.util.Random;
import java.util.stream.Stream;


@SpringBootApplication
public class PolonApplication {

	public static void main(String[] args) {
		SpringApplication.run(PolonApplication.class, args);
	}


//	@Bean
//	CommandLineRunner init(UserRepository userRepository) {
//		return args -> {
//			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
//				User user = new User(name + "123", name, new StringBuilder(name).reverse().toString().toLowerCase(), "test123", name.toLowerCase() + "@gmail.com", new Random().nextInt(10) + 18, role.USER, true);
//				userRepository.save(user);
//			});
//			User user = new User("admin" + "123", "admin", new StringBuilder("admin").reverse().toString().toLowerCase(), "admin1", "admin".toLowerCase() + "@gmail.com", new Random().nextInt(10) + 18, role.ADMIN, true);
//			userRepository.save(user);
//			userRepository.findAll().forEach(System.out::println);
//		};
//	}
}