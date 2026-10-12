package com.acmehealth.company.api.service;

import com.acmehealth.company.api.entity.ref.PersonRef;
import com.acmehealth.company.api.expansion.Expansion;
import com.acmehealth.company.api.repository.PersonRepository;
import com.acmehealth.company.api.security.AcmeUserDetails;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class AcmeUserDetailsService {

  private final PersonRepository personRepository;

  public AcmeUserDetailsService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  public AcmeUserDetails loadUserByUsername(PersonRef username) {
    return personRepository
        .findByEmail(username, Expansion.MEMBER_OF)
        .map(AcmeUserDetails::from)
        .orElseThrow(() -> unknownEmail(username));
  }

  private InsufficientAuthenticationException unknownEmail(PersonRef email) {
    return new InsufficientAuthenticationException(
        (String.format("Person %s does not exist in our system", email)));
  }
}
