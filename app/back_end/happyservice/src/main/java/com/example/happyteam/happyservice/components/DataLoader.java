package com.example.happyteam.happyservice.components;

import com.example.happyteam.happyservice.models.DiaryEntry;
import com.example.happyteam.happyservice.models.User;
import com.example.happyteam.happyservice.repositories.DiaryEntryRepository;
import com.example.happyteam.happyservice.repositories.UserRepository;
import net.bytebuddy.implementation.auxiliary.AuxiliaryType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DiaryEntryRepository diaryEntryRepository;

    public void run(ApplicationArguments args) {
        userRepository.deleteAll();
        diaryEntryRepository.deleteAll();

        User julia = new User("Julia", 35, "Vegetarian", "Rock", 1);
        userRepository.save(julia);
        User jun = new User("Jun", 35, "Vegan", "Rock", 4);
        userRepository.save(jun);
        User sara = new User("Sara", 35, "Paleo Diet", "Rock", 2);
        userRepository.save(sara);


        DiaryEntry diaryEntry1 = new DiaryEntry("22 05 2020", 5, "Ate pizza, coded and loved JS", julia);
        diaryEntryRepository.save(diaryEntry1);
        DiaryEntry diaryEntry2 = new DiaryEntry("20 05 2020", 4, "Using Java", jun);
        diaryEntryRepository.save(diaryEntry2);
        DiaryEntry diaryEntry3 = new DiaryEntry("19 05 2020", 5, "Reading Harry Potter to my son", sara);
        diaryEntryRepository.save(diaryEntry3);

    }
}
