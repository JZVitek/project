'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  HeartIcon,
  MapPinIcon,
  GiftIcon,
  HashIcon,
  MailIcon,
  ClockIcon,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  const weddingDate = new Date('2025-11-09T16:00:00');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=2940')] bg-cover bg-center bg-fixed">
      <div className='min-h-screen bg-black/40 backdrop-blur-sm py-12 px-4'>
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Header Section */}
          <div className='text-center text-white space-y-6 mb-12'>
            <div className='animate-fade-in'>
              <HeartIcon className='w-16 h-16 mx-auto mb-6 text-rose-300' />
              <h1 className='text-5xl font-serif mb-4'>Karime & Jesus</h1>
              <p className='text-2xl font-light'>!Nos Casamos!</p>
              <p className='text-xl mt-4'>
                Celebra con nosotros el día más importante de nuestras vidas.
              </p>
              <CountdownTimer targetDate={weddingDate} />
            </div>
          </div>

          {/* Main Content */}
          <Card className='bg-white/95 backdrop-blur'>
            <CardContent className='p-6'>
              <Tabs defaultValue='details' className='w-full'>
                <TabsList className='grid w-full grid-cols-4'>
                  <TabsTrigger value='details'>Detalles</TabsTrigger>
                  <TabsTrigger value='rsvp'>RSVP</TabsTrigger>
                  <TabsTrigger value='location'>Lugar</TabsTrigger>
                  <TabsTrigger value='registry'>Registry</TabsTrigger>
                </TabsList>

                <TabsContent value='details' className='space-y-6 mt-6'>
                  <div className='grid gap-6'>
                    <div className='flex items-center gap-4'>
                      <ClockIcon className='w-6 h-6 text-rose-500' />
                      <div>
                        <h3 className='font-semibold'>¿Cuándo?</h3>
                        <p>Noviembre 9, 2025 a las 9:00 PM</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <MapPinIcon className='w-6 h-6 text-rose-500' />
                      <div>
                        <h3 className='font-semibold'>Ceremonia</h3>
                        <p>[Ceremony Location]</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <GiftIcon className='w-6 h-6 text-rose-500' />
                      <div>
                        <h3 className='font-semibold'>Codigo de vestimenta</h3>
                        <p>Formal</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <HashIcon className='w-6 h-6 text-rose-500' />
                      <div>
                        <h3 className='font-semibold'>comparte tus fotos</h3>
                        <p>#KarimeAndJesus2025</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='rsvp' className='space-y-6 mt-6'>
                  {!rsvpSubmitted ? (
                    <form onSubmit={handleRSVP} className='space-y-4'>
                      <div className='grid gap-4'>
                        <div>
                          <label className='text-sm font-medium'>
                            Full Name
                          </label>
                          <Input required placeholder='Your name' />
                        </div>
                        <div>
                          <label className='text-sm font-medium'>Email</label>
                          <Input
                            required
                            type='email'
                            placeholder='your@email.com'
                          />
                        </div>
                        <div>
                          <label className='text-sm font-medium'>
                            Numero de Invitados
                          </label>
                          <Input required type='number' min='1' max='4' />
                        </div>
                        <div>
                          <label className='text-sm font-medium'>
                            Mensaje Especial
                          </label>
                          <Textarea placeholder='Share your wishes...' />
                        </div>
                      </div>
                      <Button type='submit' className='w-full'>
                        Enviar RSVP
                      </Button>
                    </form>
                  ) : (
                    <div className='text-center py-8'>
                      <h3 className='text-2xl font-semibold mb-2'>
                        ¡Gracias por tu RSVP!
                      </h3>
                      <p>
                        Tu respuesta ha sido enviada. ¡Esperamos verte en nuestra
                        boda!
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value='location' className='space-y-6 mt-6'>
                  <div className='aspect-video relative'>
                    <iframe
                      className='w-full h-full rounded-lg'
                      style={{ border: 0 }}
                      loading='lazy'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1660706674950!5m2!1sen!2sus'
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='font-semibold'>Ceremonia y Recepción</h3>
                    <p>[Venue Name]</p>
                    <p>[Complete Address]</p>
                    <Button variant='outline' className='w-full'>
                      Obtener Direccion
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value='registry' className='space-y-6 mt-6'>
                  <div className='text-center space-y-4'>
                    <GiftIcon className='w-12 h-12 mx-auto text-rose-500' />
                    <h3 className='text-xl font-semibold'>Gift Registry</h3>
                    <p className='text-gray-600'>
                      Tu presencia en nuestra boda es el regalo más grande de
                      todos. Sin embargo, si desea honrarnos con un regalo, nos
                      hemos registrado en las siguientes tiendas:{' '}
                    </p>
                    <div className='grid gap-4 mt-6'>
                      <Button variant='outline'>Amazon Registry</Button>
                      <Button variant='outline'>Target Registry</Button>
                      <Button variant='outline'>Crate & Barrel Registry</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className='text-center text-white mt-12'>
            <p className='text-sm'>
              ¿Tienes alguna pregunta? Contáctanos a través de correo
              electrónico a
              <br />
              <a href='mailto:wedding@karimeandjesus.com' className='underline'>
                wedding@karimeandjesus.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
