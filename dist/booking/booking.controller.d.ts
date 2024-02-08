import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBookingDto: UpdateBookingDto): string;
    remove(id: string): string;
}
