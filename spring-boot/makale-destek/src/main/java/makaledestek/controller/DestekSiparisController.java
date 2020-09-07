package makaledestek.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import makaledestek.message.ResponseMessage;
import makaledestek.service.DestekSiparisService;

@Controller
@CrossOrigin("http://localhost:4200")
public class DestekSiparisController {

	@Autowired
	private DestekSiparisService destekSiparisService;

	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file,
			@RequestParam("customerNameSurname") String customerNameSurname,
			@RequestParam("customerPhoneNumber") String customerPhoneNumber,
			@RequestParam("customerEmail") String customerEmail, @RequestParam("orderType") String orderType) {

		String message = "";
		try {
			destekSiparisService.saveOrder(file, customerNameSurname, customerPhoneNumber, customerEmail, orderType);
			message = "Dosya başarıyla yüklendi: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Dosya yüklenemedi: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}

	}

}
