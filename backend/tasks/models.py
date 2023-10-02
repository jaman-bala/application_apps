from django.db import models


class Task(models.Model):
    first_name = models.CharField(verbose_name="Имя", max_length=255)
    last_name = models.CharField(verbose_name="Фамилия", max_length=255)
    email = models.EmailField()
    document = models.CharField(verbose_name="Документ", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField(verbose_name="Дата регистарции", auto_now_add=True)
    photo = models.CharField("URL", max_length=512)

    def __str__(self):
        return self.first_name, self.last_name
