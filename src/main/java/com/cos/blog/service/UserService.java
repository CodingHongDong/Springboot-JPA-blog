package com.cos.blog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.blog.model.User;
import com.cos.blog.repository.UserRepository;

// 스프링이 컴포넌트 스캔을 통해서 bean에 등록을 해줌. IoC를 해준다.
@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Transactional
	public void 회원가입(User user) {
		userRepository.save(user);
	}

	@Transactional(readOnly = true) // select 할때 트랜잭션 시작, 서비스가 종료될때 트랜잭션종료 (정합성 유지)
	public User 로그인(User user) {
		return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
	}
	
}
