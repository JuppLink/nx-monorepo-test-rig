package com.acmehealth.company.api.dto.command;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
public class CeoCreateCommand extends CeoBaseCommand {
  @Schema(example = "acme@acmehealth.com", requiredMode = Schema.RequiredMode.REQUIRED)
  private String email;
}
