import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book-service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.page.html',
  styleUrls: ['./edit-book.page.scss'],
  standalone: false
})
export class EditBookPage implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  bookForm: FormGroup;
  bookId: number = 0;
  previewImage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      coverImage: ['']
    });
  }

  ngOnInit() {
    // Obtener el ID del libro desde la URL
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBook();
  }

  loadBook() {
    this.bookService.getBook(this.bookId).subscribe((book: any) => {
      this.bookForm.patchValue({
        title: book.title,
        author: book.author,
        coverImage: book.coverImage || ''
      });
      this.previewImage = book.coverImage || null;
    });
  }

  async pickFromGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });
      this.previewImage = image.dataUrl || null;
    } catch (error) {
      console.error('Error picking from gallery:', error);
    }
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.previewImage = image.dataUrl || null;
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookForm.patchValue({ coverImage: this.previewImage || '' });
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe(() => {
        console.log('Libro actualizado exitosamente');
        this.router.navigate(['/my-books']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/my-books']);
  }

}
