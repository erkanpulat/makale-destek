package makaledestek.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "orders")
public class DestekSiparis {

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;

	@Column(name = "fileName")
	private String fileName;

	@Column(name = "fileType")
	private String fileType;

	@Column(name = "fileData")
	@Lob
	private byte[] data;

	@Column(name = "customerNameSurname")
	private String customerNameSurname;

	@Column(name = "customerPhoneNumber")
	private String customerPhoneNumber;

	@Column(name = "customerEmail")
	private String customerEmail;

	@Column(name = "orderType")
	private String orderType;

	public DestekSiparis() {

	}

	public DestekSiparis(String fileName, String fileType, byte[] data, String customerNameSurname,
			String customerPhoneNumber, String customerEmail, String orderType) {
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
		this.customerNameSurname = customerNameSurname;
		this.customerPhoneNumber = customerPhoneNumber;
		this.customerEmail = customerEmail;
		this.orderType = orderType;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public String getCustomerNameSurname() {
		return customerNameSurname;
	}

	public void setCustomerNameSurname(String customerNameSurname) {
		this.customerNameSurname = customerNameSurname;
	}

	public String getCustomerPhoneNumber() {
		return customerPhoneNumber;
	}

	public void setCustomerPhoneNumber(String customerPhoneNumber) {
		this.customerPhoneNumber = customerPhoneNumber;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getOrderType() {
		return orderType;
	}

	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}

	public String getId() {
		return id;
	}

}
