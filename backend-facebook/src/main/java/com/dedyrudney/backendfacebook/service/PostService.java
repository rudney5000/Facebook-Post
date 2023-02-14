package com.dedyrudney.backendfacebook.service;

import com.dedyrudney.backendfacebook.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
