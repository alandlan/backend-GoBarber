import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRespository extends Repository<Appointment> {
    /* metodo asincrono é sempre uma função que retornar uma promise */

    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }
}

export default AppointmentsRespository;
