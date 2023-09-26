package com.infoway.mailsender;

import org.springframework.stereotype.Service;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;


@Service
public class JavaMailSenderAPI {
    @Autowired
    public JavaMailSender javaMailSender;

    public void sendMail(String toMail,
                         String subject,
                         String body) {

        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("innership45@gmail.com");
        message.setTo(toMail);
        message.setText(body);
        message.setSubject(subject);

        javaMailSender.send(message);

        System.out.println("mail sent succesfully....");
    }

    public void sendMailAttach(String toMail,
                               String subject,
                               String body,
                               String attchment)throws MessagingException {

        MimeMessage message=javaMailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(message, true);
        helper.setFrom("innership45@gmail.com");
        helper.setTo(toMail);
        helper.setSubject(subject);
        helper.setText(body);

        FileSystemResource fileSystemResource=
                new FileSystemResource(new File(attchment));
        helper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);

        javaMailSender.send(message);
        System.out.println("mail sent with attachment succesfully....");
    }
}
