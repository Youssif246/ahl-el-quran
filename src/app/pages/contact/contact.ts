import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    fullName: '',
    phone: '',
    program: '01 — حفظ القرآن الكريم',
    notes: ''
  };

  programOptions = [
    '01 — حفظ القرآن الكريم',
    '02 — المراجعة والتثبيت',
    '03 — تصحيح التلاوة والتجويد',
    '04 — القراءات والإجازات',
    '05 — برنامج الأطفال والبراعم',
    '06 — العلوم الإسلامية واللغة العربية'
  ];

  isSubmitted = signal<boolean>(false);

  onSubmit() {
    if (this.formData.fullName && this.formData.phone) {
      this.isSubmitted.set(true);
    }
  }

  resetForm() {
    this.formData = {
      fullName: '',
      phone: '',
      program: '01 — حفظ القرآن الكريم',
      notes: ''
    };
    this.isSubmitted.set(false);
  }
}
