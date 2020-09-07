package makaledestek.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import makaledestek.model.DestekSiparis;
import makaledestek.repository.DestekSiparisRepository;

@Service
public class DestekSiparisService {

	@Autowired
	private DestekSiparisRepository destekSiparisRepository;

	public DestekSiparis saveOrder(MultipartFile file, String customerNameSurname, String customerPhoneNumber,
			String customerEmail, String orderType) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		DestekSiparis destekSiparis = new DestekSiparis(fileName, file.getContentType(), file.getBytes(),
				customerNameSurname, customerPhoneNumber, customerEmail, orderType);
		return destekSiparisRepository.save(destekSiparis);
	}
}
