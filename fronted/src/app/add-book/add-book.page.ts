import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
  standalone: false,
})
export class AddBookPage implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  bookForm: FormGroup;
  previewImage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      coverImage: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookForm.patchValue({ coverImage: this.previewImage || '' });
      this.bookService.createBook(this.bookForm.value).subscribe(() => {
        console.log('Libro creado exitosamente');
        this.router.navigate(['/my-books']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/my-books']);
  }

  pickFromGallery() {
    this.fileInput?.nativeElement.click();
  }

  handleFileInput(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        quality: 70,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      this.previewImage = photo.dataUrl || null;
    } catch (error) {
      console.warn('Captura cancelada o no disponible', error);
    }
  }
}
